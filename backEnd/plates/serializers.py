
from rest_framework import serializers
from .models import Plates

    
     
        
class PlatesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Plates
        fields = "__all__"
        read_only_fields = ["id", "created_at", "updated_at"]