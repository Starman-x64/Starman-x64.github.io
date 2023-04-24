import os
import pandas as pd

os.chdir(os. getcwd() + "/data")

xlsx = pd.ExcelFile(os.curdir + "/item_data.xlsx")
data = pd.read_excel(xlsx, 0)
num_rows = data.shape[0]

def generate_object(i):
    name = str(data.iat[i, 0])
    custom_tag = str(data.iat[i, 1])
    base = str(data.iat[i, 2])
    custom_model_data = str(data.iat[i, 3])
    custom_model_name = str(data.iat[i, 4])
    type = str(data.iat[i, 5])
    category = str(data.iat[i, 6])
    lore = str(data.iat[i, 8])
    name_format = str(data.iat[i, 9])
    lore_format = str(data.iat[i, 10])
    other_nbt = str(data.iat[i, 11])
    
    json_object = """    {{
        "tag": "{0}",
        "name": "{1}",
        "baseItem": "{2}",
        "customModelData": "{3}",
        "customModelName": "{4}",
        "type": "{5}",
        "category": "{6}",
        "lore": "{7}",
        "nameFormatting": {8},
        "loreFormatting": {9},
        "nbt": {10}
    }}""".format(custom_tag, name, base, custom_model_data, custom_model_name, type, category, lore, name_format, lore_format, other_nbt)

    return json_object

json_data = "[\n"
print("Parsing {0} rows of data...".format(num_rows))
for i in range(0, num_rows):
    #generate json object
    json = generate_object(i)
    json_data += json + ("" if i == num_rows - 1 else ",\n")
json_data += "\n]"
#open items.json
file = open("items.json", "w", encoding="utf8")
file.truncate(0)
#write the lines to the file
file.writelines(json_data)

print("Done.")