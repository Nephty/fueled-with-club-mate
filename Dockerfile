FROM python:3.11

ARG DB_NAME
ARG DB_USER
ARG DB_PASSWORD
ARG DB_HOST
ARG DB_PORT
ARG DJANGO_SECRET_KEY

ENV DB_NAME=$DB_NAME
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_HOST=$DB_HOST
ENV DB_PORT=$DB_PORT
ENV DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY

WORKDIR /fwcm

COPY requirements.txt requirements.txt
COPY . /fwcm/

RUN pip install -r requirements.txt

CMD ["gunicorn", "--chdir" , "./fwcm", "--bind", ":8000", "fwcm.wsgi:application"]
