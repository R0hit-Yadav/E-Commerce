from rest_framework import serializers
from .models import *

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


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterCustomer
        fields = ['first_name', 'last_name', 'email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(RegisterSerializer, self).create(validated_data)

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(RegisterSerializer, self).create(validated_data)