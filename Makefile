build:
	npm run blog:build

relative-path:
	npm run blog:relative

upload:
	node ipfs-uploader/index.js -d ./docs/src/.vuepress/dist

deploy:
	make build
	make relative-path
	make upload
