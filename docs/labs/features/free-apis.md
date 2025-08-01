# Free APIs Available in Skills Network Labs

While taking labs within Skills Network Labs, your learners will have free access to some APIs.
This helps learners get started with the interesting stuff right away, without immediately worrying about registration.

## Learner Quotas

Learner usage of Skills Network-provided APIs is subject to a quota. The quota is based on actual cost, so if you choose lower-cost APIs (e.g. lower cost models), then your learners will be less likely to hit their quota.

When a learner has reached their quota, they will receive an error message like this one:

```shell
RateLimitError: Error code: 429 - {'error': 'You have exceeded your usage quota for Skills Network-provided <api endpoint> for the day. Your quota will reset in 6 hours 32 minutes from now.'}
```

## Limitations

These free Skills Network-provided APIs are available for learning and experimentation. They are not suitable when it comes to deploying an application.

Learners will have access to these APIs within their:
- Cloud IDE (from their terminal/shell, or when running an application from within Cloud IDE)
- JupyterLab IDE (from their notebook, or from the JupyterLab terminal/shell)
- RStudio IDE

Learners will _not_ have free access to these APIs within their:
- Code Engine projects
- JupyterLite
- Kubernetes cluster namespaces
- OpenShift cluster namespaces


## Free APIs

### Versioning

It is recommended that authors follow the instructions below using the default package version installed with pip. However, after doing so, please pin the version you used for your learners. If you encounter an error with the latest package version and the following instructions, please let us know!

For example:
```shell
pip install ibm-watsonx-ai
```
```
Collecting ibm-watsonx-ai
  Downloading ibm_watsonx_ai-0.2.0-py3-none-any.whl.metadata (8.1 kB)
...
```

Your lab instructions would state:
```shell
pip install ibm-watsonx-ai==0.2.0
```

#### Usage

#### watsonx.ai

To use the free Skills Network-provided watsonx.ai project, specify the `"url"` and `project_id = "skills-network"` (make sure to **leave out** `"token"` and `"apikey"`). For example, you can modify [the example from the official documentation for the ibm_watsonx_ai library](https://www.ibm.com/docs/en/watsonx/saas?topic=library-inferencing-foundation-model) as follows:

```python
from ibm_watsonx_ai.foundation_models.utils.enums import ModelTypes
from ibm_watsonx_ai.foundation_models import ModelInference
import json

my_credentials = {
     url="https://us-south.ml.cloud.ibm.com",     
 #   apikey="your_api_key_here" # Uncomment and add your API key if not using skills-network 
}


model_id    = ModelTypes.FLAN_T5_XXL
gen_parms   = None
project_id  = "skills-network" # <--- NOTE: specify "skills-network" as your project_id
space_id    = None
verify      = False

model = ModelInference(
  model_id=model_id,
  credentials=my_credentials,
  params=gen_parms,
  project_id=project_id,
  space_id=space_id,
  verify=verify,
)

prompt_txt = "In today's sales meeting, we "
gen_parms_override = None

generated_response = model.generate(prompt=prompt_txt, params=gen_parms_override)

print(json.dumps(generated_response, indent=2))
```

#### OpenAI

To use the free Skills Network-provided OpenAI API, no additional configuration is necessary. You can use [the examples from the official documentation](https://platform.openai.com/docs/api-reference/chat/create?lang=python) without modification.

For example:
```python
from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
  model="gpt-4.0",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ]
)

print(completion.choices[0].message)
```

#### Anthropic

To use the free Skills Network-provided Anthropic API, make sure to **leave out** the `"apikey"` parameter in the Anthropic client. You can use [the example from the official documentation](https://docs.anthropic.com/en/api/client-sdks#python) as follows:

```python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude"}
    ]
)
print(message.content)
```

#### CrewAI

To use the free WatsonX API provided by the Skills Network with CrewAI, make sure to leave out the `api_key` parameter in the LLM object of CrewAI. However, the following parameteres must be defined:
- `model`: The foundational model to use, e.g., "watsonx/ibm/granite-3-3-8b-instruct"
- `base_url`: The WatsonX service endpoint, generally: "https://us-south.ml.cloud.ibm.com"
- `project_id`: Set to "skills-network" for the use in Skills Network environment

```python
from crewai import LLM 

llm = LLM(
    model="watsonx/ibm/granite-3-3-8b-instruct",
    base_url="https://us-south.ml.cloud.ibm.com",
    project_id="skills-network",
)
```

Here is the [official documentation](https://docs.crewai.com/en/concepts/llms#provider-configuration-examples) of CrewAI. CrewAI uses LiteLLM which handles all the LLM requests. Supported models listed under [LiteLLM site](https://docs.litellm.ai/docs/providers/watsonx) of IBM Watsonx.ai are all deprecated so please be mindful using those. Here is the [list of IBM foundational models](https://www.ibm.com/docs/en/watsonx/saas?topic=models-foundation) available on watsonx.ai for the users to try.
