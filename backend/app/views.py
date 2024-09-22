from rest_framework import generics
from .models import Phone,Headphone,Camera,Laptop,Gaming
from .serializers import PhoneSerializer,HeadphoneSerializer,CameraSerializer,LaptopSerializer,GamingSerializer

class PhoneListCreate(generics.ListCreateAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer


class HeadphoneListCreate(generics.ListCreateAPIView):
    queryset = Headphone.objects.all()
    serializer_class = HeadphoneSerializer


class CameraListCreate(generics.ListCreateAPIView):
    queryset = Camera.objects.all()
    serializer_class = CameraSerializer 


class LaptopListCreate(generics.ListCreateAPIView):
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer


class GamingListCreate(generics.ListCreateAPIView):
    queryset = Gaming.objects.all()
    serializer_class = GamingSerializer


