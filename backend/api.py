import openai
"==============="
def generator():
    openai.api_key="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"
    #for generating the details of the person

    completion = openai.Completion.create(
    model="text-davinci-003",
    prompt="Generate random persona\nName\nAge\nGender\nOccupation\nCountry\nEducation ",
    temperature=1,
    max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )
    response = completion.choices[0].text.split("\n")
    response=response[2:]
    response = dict((x,y)
                for x, y in (element.split(':')
                for element in response))
    a=[]
    a.append(response)
    print("APPENDED DETAILS")
    #for generating the image related to the person
    '''creating new prompt for image of generated persona'''
    prompt_img= "Photo for  {}year old {} from {} doing {}".format(response["Age"],response["Gender"],response["Country"],response["Occupation"])
    response = openai.Image.create(
        prompt=prompt_img,
        n=1,
        size="256x256",
    )
    #link to image to return image url
    img_link=response["data"][0].url
    a.append(img_link)
    return a
