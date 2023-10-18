from django.urls import path
from .views import main, getForecastData, getLocationData

urlpatterns = [
    path('', main),
    path('api/location/', getLocationData),
    path('api/forecast/', getForecastData),
]
