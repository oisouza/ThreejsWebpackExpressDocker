FROM node:14.17.3

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install -g npm@7.19.1

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/threejs/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/threejs
RUN npm install --silent --progress=false

USER root
COPY . $HOME/threejs
RUN chown -R app:app $HOME/*
USER app

CMD ["npm", "start"]
