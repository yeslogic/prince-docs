#!/usr/bin/env python3

from html.parser import HTMLParser
from html import escape as html_escape
import sys
import os
import pickle
from enum import Enum

from util import *

docs_dir = None

class ContextType(Enum):
    root = 1

class Context:
    def __init__(self, ctype):
        self.ctype = ctype

    def __str__(self):
        return "%s context" % self.ctype

class ProcessDoc(MyHTMLParser):
    def __init__(self, filename, out):
        super().__init__(convert_charrefs=False)
        self.filename = filename
        self.out = out
        self.text = ""
        self.get_text = False
        self.cur_context = Context(ContextType.root)
        self.context_stack = []

    def handle_startendtag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "property":
            if "prince-" in self.property(attrs['name']):
                self.write("-" + self.property(attrs['name']))
            else:
                self.write(self.property(attrs['name']))
        else:
            self.write(self.get_starttag_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.write(self.get_starttag_text())

    def handle_endtag(self, tag):
        self.write("</%s>" % tag)

    def handle_data(self, data):
        self.write(data)

    def handle_entityref(self, name):
        self.write("&%s;" % name)

    def handle_charref(self, name):
        self.write("&#%s;" % name)

    def handle_comment(self, data):
        pass

    def handle_decl(self, decl):
        self.write("<!%s>" % decl)

    def handle_pi(self, pi):
        self.write("<?%s>" % pi)

    def push_context(self, context):
        self.context_stack += [self.cur_context]
        self.cur_context = context

    def pop_context(self, ctype):
        context = self.cur_context
        assert context
        assert context.ctype == ctype

        if len(self.context_stack) == 0:
            self.cur_context = None
        else:
            self.cur_context = self.context_stack[-1]
            self.context_stack = self.context_stack[:-1]

        return context

    def write(self, string):
        if self.get_text:
            self.text += string
        else:
            self.out.write(string)

    def start_get_text(self):
        self.get_text = True
        self.text = ""

    def end_get_text(self):
        self.get_text = False
        text = self.text
        self.text = None
        return text

    def include(self, filename, formatting):
        filename = os.path.join(docs_dir, filename)
        f = open(filename, "r")
        string = f.read()
        f.close()
        if formatting == 'text':
            string = "<pre>" + html_escape(string) + "</pre>"
        return string

    def property(self, name):
        href = "#prop-%s" % name
        return "<a href=\"%s\">%s</a>" % (href, name)

def main():
    global docs_dir

    out_filename = sys.argv[1]
    in_filename = sys.argv[2]
    docs_dir = os.path.dirname(in_filename)

    inf = open(in_filename, "r")

    def process(outf):
        p = ProcessDoc(in_filename, outf)
        for l in inf:
            if not l.startswith("<?xml"):
                p.feed(l)

        return p.close()

    try:
        return wrap_process(process, out_filename)
    finally:
        inf.close()

if __name__ == "__main__":
    if not main():
        sys.exit(1)

