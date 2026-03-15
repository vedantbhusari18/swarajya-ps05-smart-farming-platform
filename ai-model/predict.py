import random

def predict_crop(soil, weather):
    if soil == "loamy" and weather == "rainy":
        return "Rice"
    elif soil == "sandy":
        return "Groundnut"
    else:
        return "Wheat"

if __name__ == "__main__":
    soil = input("Enter soil type: ")
    weather = input("Enter weather: ")

    crop = predict_crop(soil, weather)
    print("Recommended Crop:", crop)
