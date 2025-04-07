# Narration Dictionary

This is the narration dictionary page which is used to teach our AI narrator how to pronounce difficult acronyms and words (mostly libraries and products). For example if the narration pronounces, "IBM" as "ih-buh-mmm" instead of "eye-bee-em" this is the place to fix it!

## Important Notes:

- Make sure to keep the keys lowercase
- [Test out the pronounciations here](https://www.openai.fm/#9341c0db-be30-4151-8a79-1466ff55e16b) 

## The Dictionary

```json
// START DICTIONARY
{
  "find": "replace",
  "theacronym": "howtopronunce"
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
