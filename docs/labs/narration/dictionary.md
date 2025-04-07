# Narration Pronounciation Dictionary

This is the narration dictionary page which is used to teach our AI narrator how to pronounce difficult acronyms and words (mostly libraries and products). For example if the narration pronounces, "IBM" as "ih-buh-mmm" instead of "eye-bee-em" this is the place to fix it!

## How to add a new word to the pronounciation dictionary

1. Determine how to spell the pronounciation ([Test out the pronounciations here](https://www.openai.fm/#9536cc76-574b-4b57-8c8c-6d471b2a4772))
2. Update the JSON below (within the `START DICTIONARY` and `END DICTIONARY` comments) with the new update:
  - Key: The word as seen in the instructions in _lowercase_
  - Value: The correct pronounciation spelling as determined in _step 1_
3. Create a new PR of your changes, and include a share link to htttps://openai.fm including both words (original and pronounciation spelling)

## Important Notes:

- Make sure to keep the keys lowercase
- [Test out the pronounciations here](https://www.openai.fm/#9536cc76-574b-4b57-8c8c-6d471b2a4772) 

## The Dictionary

```json
// START DICTIONARY
{
  "watsonx.ai": "watsonx-dot-AI",
  "watsonx.data": "watsonx-dot-data",
  "watsonx.governance": "watsonx-dot-governance",
  "cics": "kicks",
  "aspera": "uh-SPAIR-uh",
  "qiskit": "kiss-kit",
  "faiss": "fice"
}
// END DICTIONARY
```


## Narration Details

Currently we are using `Ballad` from `gpt-4o-mini-tts`. You can test on https://openai.fm with following prompt:

```
Pace: Moderate
Tone: Moderate
Volume: Normal
```
