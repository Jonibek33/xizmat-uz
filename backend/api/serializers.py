from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(required=False, allow_empty_file=False)

    class Meta:
        model = Product
        fields = ["name",
                  "description",
                  "email",
                  "password",
                  "number",
                  "category",
                  "img",
                  "price",
                  "location"]

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        request = self.context.get("request")
        if instance.img and request:
            ret["img"] = request.build_absolute_uri(instance.img.url)
        else:
            ret["img"] = None
        return ret
