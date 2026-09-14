.PHONY: all
all: output output/_std-data.json
	cp output/_std-data.json ../pages/js-support/_std-data.json

.PHONY: output
output:
	mkdir -p output

output/_std-data.json: std.json std-annotated.json
	jq -s 'reduce .[] as $$item ({}; . * $$item)' std.json std-annotated.json > output/_std-data.json

.PHONY: clean
clean:
	rm -rf output
