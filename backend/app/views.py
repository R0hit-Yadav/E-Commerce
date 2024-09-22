from rest_framework import generics
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from app.api.razorpay_serializers import TransactionSerializer
from .serializers import *
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib.auth import logout
from rest_framework import generics
from .models import *
from django.conf import settings
from rest_framework.decorators import api_view
import requests
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from app.api import *
from rest_framework import viewsets

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



class RegisterView(generics.ListCreateAPIView):
    queryset = RegisterCustomer.objects.all()
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.save()  # Saving the user

            # Here you can return more user-related data if needed
            return Response({
                'success': True,
                'message': "Account created successfully",
                'user': serializer.data
            }, status=status.HTTP_201_CREATED)
        
        # If there are validation errors, return a detailed response
        return Response({
            'success': False,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=username, password=password)

        if user is not None and user.is_active:
            login(request, user)
            return Response({
                'success': True, 
                'message': "Login successful", 
                'username': user.username
            }, status=status.HTTP_200_OK)
        elif user is not None and not user.is_active:
            return Response({'error': "Account is not active"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error': "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
    

class CompleteTransactionView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            # Save the transaction to the database
            serializer.save()
            return Response({'message': 'Transaction completed successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def logout_view(request):
    # Use Django's built-in logout function
    logout(request)
    return Response({"message": "Logged out successfully"}, status=200)


class AllItemsViewSet(viewsets.ModelViewSet):
    queryset = AllItems.objects.all()
    serializer_class = AllItemsSerializer

