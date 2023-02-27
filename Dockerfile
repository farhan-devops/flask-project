FROM python:3.9.16-alpine3.17
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY . .
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "-m", "flask", "run"]

