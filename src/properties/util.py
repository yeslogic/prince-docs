
import os
from html.parser import HTMLParser

debug = False

class HTMLError(ValueError):
    def __init__(self, filename, line, col, message):
        self.filename = filename
        self.line = line
        self.col = col+1
        self.message = message

    def __str__(self):
        return "%s:%d:%d: %s" % \
                (self.filename, self.line, self.col, self.message)

class MyHTMLParser(HTMLParser):
    def __init__(self, *, convert_charrefs=False):
        super().__init__(convert_charrefs=convert_charrefs)
        self.had_error = False
        self.errors = []

    def error(self, message):
        self.had_error = True
        self.errors += [self.make_error(message)]

    def warning(self, message):
        self.errors += [self.make_error(message)]

    def make_error(self, message):
        line, _ = self.getpos()
        return "%s:%d: Warning %s." % (self.filename, line, message)

    def feed(self, text):
        try:
            super().feed(text)
        except Exception as e:
            self.error("An exception occured at this location")
            raise e

    def close(self):
        super().close()
        for e in self.errors:
            print(e)
        return not self.had_error

class IndexItem:
    def __init__(self, key, href, link_text):
        self.key = key
        self.href = href
        self.link_text = link_text

    def __str__(self):
        return "IndexItem: \n\t" + self.str_basic()

    def str_basic(self):
        return "%s: href: %s, text: \'%s\'" % \
                (self.key, self.href, self.link_text)

    def __lt__(self, other):
        return self.key < other.key

    def __eq__(self, other):
        return self.key == other.key and \
               self.href == other.href and \
               self.link_text == other.link_text

    def is_chapter(self):
        return False

    def is_appendix(self):
        return False

    def is_in_appendix(self):
        return False

    def is_section(self):
        return False

class Section(IndexItem):
    def __init__(self, key, href, link_text, level, section_no, is_appendix):
        super().__init__(key, href, link_text)
        self.level = level
        self.section_no = section_no
        self.parent_section_no = section_no[0:-1]
        self._is_in_appendix = is_appendix

    def is_chapter(self):
        return self.level == 1 and not self._is_in_appendix

    def is_appendix(self):
        return self.level == 1 and self._is_in_appendix

    def is_in_appendix(self):
        return self._is_in_appendix

    def is_section(self):
        return True

    def __str__(self):
        return "Section: \n\t" + self.str_basic() + \
            "\n\tsecton no: %s level: %d" % \
                (str(self.section_no), self.level) + \
            "\n\tparent section no: %s" % str(self.parent_section_no)

    def __eq__(self, other):
        return super().__eq__(other) and \
               self.level == other.level and \
               self.section_no == other.section_no

class Index:
    def __init__(self, idxlist, version, version_pretty, copyright_end_year):
        self.list = idxlist
        self.version = version
        self.version_pretty = version_pretty
        self.copyright_end_year = copyright_end_year

def make_index(index_list):
    return dict(map(lambda i: (i.key, i), index_list))

def wrap_process(process, out_filename, mode="w"):
    inf = None
    outf = None

    try:
        try:
            outf = open(out_filename, mode)
            return process(outf)
        finally:
            if outf:
                outf.close()
    except:
        try:
            os.unlink(out_filename)
        except OSError:
            pass
        raise

