from rest_framework import serializers
from .models import Phone, Headphone, Camera, Laptop, Gaming

class PhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
        fields = ['id', 'name', 'description', 'price', 'image']

class HeadphoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Headphone
        fields = ['id', 'name', 'description', 'price', 'image']

class CameraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Camera
        fields = ['id', 'name', 'description', 'price', 'image']


class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        fields = ['id', 'name', 'description', 'price', 'image']


class GamingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gaming
        fields = ['id', 'name', 'description', 'price', 'image']