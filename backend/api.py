import openai

def generator():
    # Set OpenAI API key
    openai.api_key="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"

    # Generate details of a random person using OpenAI's GPT-3 API
    completion = openai.Completion.create(
        model="text-davinci-003",
        prompt="Generate random persona\nName\nAge\nGender\nOccupation\nCountry\nEducation ",
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    # Extract the response and parse it into a dictionary
    response = completion.choices[0].text.split("\n")
    response=response[2:]
    response = dict((x,y)
                for x, y in (element.split(':')
                for element in response))

    # Append the details of the generated persona to a list
    a=[]
    a.append(response)

    # Generate an image related to the persona using OpenAI's Dall-E 2 API
    prompt_img= "Photo for  {}year old {} from {} doing {}".format(response["Age"],response["Gender"],response["Country"],response["Occupation"])
    response = openai.Image.create(
        prompt=prompt_img,
        n=1,
        size="256x256",
    )

    # Extract the URL of the generated image and append it to the list
    img_link=response["data"][0].url
    a.append(img_link)

    # Return the list of persona details and image URL
    return a
