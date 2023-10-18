from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
import requests
import os

api_key = os.environ.get('API_KEY')


def main(request):
    return HttpResponse('<h1>Hello World</h1>')


@api_view(['POST'])
def getLocationData(request):
    locationValue = request.data.get('value', None)
    getLocationUrl = f"https://api.openweathermap.org/geo/1.0/direct?q={locationValue}&limit=5&appid={api_key}"

    response = requests.get(getLocationUrl).json()
    return JsonResponse(response, safe=False)


@api_view(['POST'])
def getForecastData(request):
    loc = request.data.get('loc', None)
    getForecastUrl = f"https://api.openweathermap.org/data/2.5/forecast?lat={loc['lat']}&lon={loc['lon']}&units=metric&appid={api_key}"
    response = requests.get(getForecastUrl).json()
    return JsonResponse(response, safe=False)
