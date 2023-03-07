#!/usr/bin/env python3

import xml.etree.ElementTree as ET
import sys
import os

doc_file = sys.argv[1]

doc = ET.parse(doc_file)
root = doc.getroot()
headings = [el for el in root.findall('.//*[@id]') if el.tag in ["summary"]]
for h in headings:
    if not h.find('a'):
        if h.text:
            h.text = str(h.text) + ' '
        hid = h.get('id')
        a = ET.Element('a')
        a.set('href', '#'+hid)
        a.set('class', 'self-link')
        a.text = ' '
        h.append(a)
        doc.write(doc_file)
