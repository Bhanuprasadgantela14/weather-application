# Weather Application
This is the Weather application to find weather for particular city.

## Tech Stack
**React, Django**



## Deployment
**View my deployment on ___ => [Live Demo]().**

## Setup
To run the Weather App locally on your machine, follow these steps:
1.	Make sure you have Node.js installed on your machine.
2.	Clone this repository or download the source code.
```
https://github.com/Bhanuprasadgantela14/weather-application.git
```
3. Open a terminal and navigate to the project directory. Then cd into frontend directory.
```
cd frontend
```
4. Run the following command to install the project dependencies:
```
npm install
```
5. You Also need to start the django project in order to run the project.
6. So on next we will set backend repository also. For now,
7. Open the app in your browser:
- Open http://localhost:5173/ in your preferred browser.
- The Weather App should now be running and accessible in your browser.


## Backend Setup

- Open the new terminal in root directoy::

- Then, cd to backend directory.
```
cd backend
```

- Create virtual environment:
```py
python3 -m venv env # for Windows or
python -m venv env # for Windows
virtualenv env # for Mac/Linux or;
virtualenv env -p python3 # for Mac/Linux
```

- Activate scripts:
```bash
.\env\Scripts\activate  # for Windows
source env/bin/activate  # for MAC/Linux
```

- See the (env) sign before your terminal.

- Install dependencies:
```py
pip install -r requirements.txt
```


### python-decouple

- Create .env file on backend directory. We will collect our variables in this file.
```
API_KEY=<your API Key from open wether api>
```

- Migrate:
```bash
python3 manage.py migrate  # or;
python manage.py migrate  # or;
py manage.py migrate
```

- Create superuser:
```bash
py manage.py createsuperuser  # or;
python manage.py createsuperuser  # or;
python3 manage.py createsuperuser
```


- Run the server and see the initial setup:
```bash
py manage.py runserver  # or;
python manage.py runserver  # or;
python3 manage.py runserver
``````


## Usage
- Upon opening the application, the user is presented with the current weather conditions for their current location.
- The user can search for weather information by entering a location in the search bar and pressing Enter or clicking the search button.
- The application fetches the weather data from the API and displays the current conditions.