from fastapi import FastAPI
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI()

@app.get("/")
async def read_index():
    return FileResponse('index.html')

@app.get("/styles.css")
async def read_styles():
    return FileResponse('styles.css')

@app.get("/script.js")
async def read_script():
    return FileResponse('script.js')

@app.get("/api/hello")
def hello():
    return {"message": "Hello from the API"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
