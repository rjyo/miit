deploy:
	@npm run build
	@rsync -r public/ root@138.68.15.240:/var/www/miit
