from django.urls import path
from .views import PhoneListCreate,GamingListCreate,LaptopListCreate,HeadphoneListCreate,CameraListCreate

urlpatterns = [
    path('api/phone/', PhoneListCreate.as_view(), name='phone-list-create'),
    path('api/laptop/', LaptopListCreate.as_view(), name='laptop-list-create'),
    path('api/gaming/', GamingListCreate.as_view(), name='gaming-list-create'),
    path('api/headphone/', HeadphoneListCreate.as_view(), name='headphone-list-create'),
    path('api/camera/', CameraListCreate.as_view(), name='camera-list-create'),
]
    