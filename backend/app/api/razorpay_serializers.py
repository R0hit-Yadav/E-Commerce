from rest_framework import serializers
from ..models import *
class CreateOrderSerializer(serializers.Serializer):
    amount = serializers.FloatField()
    currency = serializers.CharField()

class TransactionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Transaction
        fields = ['payment_id','order_id','signature','amount']

