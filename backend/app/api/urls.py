from django.urls import path
from app.api.api_razorpay import *

urlpatterns = [
    path('order/create/',CreateOrderAPIView.as_view(),name='create-order-api'),
    path('order/complete/',TransactionAPIView.as_view(),name='compelete-order-api')
]