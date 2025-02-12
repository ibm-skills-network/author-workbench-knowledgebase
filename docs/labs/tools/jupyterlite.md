# JupyterLite

JupyterLite is a responsive python notebook environment we provide for your learners' best experience.

## Using JupyterLite

### Installing Packages

Installing packages in JupyterLab is usually done with a package manager such as `pip`, `conda` or `mamba` like:

```
!pip install numpy pandas
!conda install -c conda-forge numpy pandas
!mamba install numpy pandas
```

In JupyterLite you simply use the `%pip` magic command:

```python
%pip install numpy pandas
```

For [pure python packages](#libraries-from-pypi) we ***strongly recommend*** pinning the version you wish to install:
```python
%pip install optuna==4.2.0
```

For additional information about supported packages and caveats read the [Supported Libraries](#supported-libraries), [Unsupported or Partially Supported Libraries](#unsupported-or-partially-supported-libraries) and [Additional Caveats](#additional-caveats) sections.

### Downloading Data

You may be accustomed to loading data the following way:

```python
import pandas as pd

URL = 'https://www.url.to/my/dataset.csv'

df = pd.read_csv(URL)
```

In JupyterLite, you must use the following method instead:

```python
import pandas as pd
import skillsnetwork

URL = 'https://www.url.to/my/dataset.csv'

await skillsnetwork.download_dataset(URL)
df = pd.read_csv('dataset.csv')
```

Since JupyterLite has restricted access to the internet, we ***strongly recommend*** uploading files to the Skills Network File Library before downloading them with `await skillsnetwork.download_dataset()` in your notebook. To upload files into the Skills Network File Library, follow these steps:

1. Open the Skills Network File Library by clicking on "SN File Library" at the top of the lab:
![An image that shows the location of the Skills Network File Library at the top of an open JupyterLab notebook](/img/labs/jupyterlab-file-library.png)

2. At the top of the browser tab that opened as a result of clicking "SN File Library" on the previous step, click on "+ Upload":
![An image that shows the location of the Upload button at the top of the newly opened browser tab](/img/labs/file-library-upload.png)

3. On the drop-down menu following the clicking of "+ Upload" you can choose to create a folder, upload a file, or upload a folder. In this section, we will demonstrate how to upload a file. The process for workflows involving folders is very similar. To upload a file, select "Upload File":
![An image that shows the location of the Upload File button following the clicking of Upload](/img/labs/file-library-upload-file.png)

4. Select the file you wish to upload, and click "Open":
![An image that indicates how to select the file and click Open to upload](/img/labs/file-library-select-file.png)

5. Wait for the file to finish uploading. If you get a blank screen after uploading, reload the page using your browser. Otherwise, proceed to the next step.

6. Click on the three dots at the bottom right of your file's icon to pull down the options menu:
![An image that the location of the pulldown menu for a file. The pulldown menu is in the bottom right corner of the file icon and is represented by 3 dots stacked vertically on top of each other](/img/labs/file-library-file-pulldown-menu-button.png)

7. Click on "Copy URL" to copy the link to the file:
![An image that instructs authors to click on "Copy URL"](/img/labs/file-library-copy-url.png)

8. Access the file in your JupyterLite notebook by replacing `YOUR_URL` with the URL you just copied:
```python
import pandas as pd
import skillsnetwork

URL = 'YOUR_URL'

await skillsnetwork.download_dataset(URL)
df = pd.read_csv(URL.rsplit('/', 1)[1])
```

### Best practices

Follow these best practices when creating JupyterLite labs:

 - Ask your learners to launch the lab in the Chrome browser
   - Chrome is recommended for JupyterLite, though Firefox has been shown to work in many cases
 - Do not ask your learners to restart the kernel after `%pip install`
   - Restarting the kernel is common after installing packages in JupyterLab. However, restarting the kernel after installing packages in JupyterLite will make those packages unavailable in JupyterLite
 - Pin [pure python package](#libraries-from-pypi) versions when installing from [PyPI](https://pypi.org/)


## Should you use JupyterLite?

For python-notebook labs, we ***strongly recommend*** you use JupyterLite for your learners' best experience.

However, sometimes JupyterLite may not be an option for you - we lay out these cases in the next sections.

For more information on why JupyterLite is preferred over JupyterLab see [JupyterLite vs JupyterLab](../jupyterlite-vs-jupyterlab).

<!-- ### Supported libraries

Many popular python science libraries are compadible with JupyterLite:
 - `numpy`
 - `sklearn`
 - `scipy`
 - `pandas`
 - `matplotlib`
 - `plotly`
 - `seaborn`
 - And many more -->


### Supported Libraries

#### Preinstalled libraries
JupyterLite comes preinstalled with a set of Python packages. You can find a list of these packages [here](https://pyodide.org/en/latest/usage/packages-in-pyodide.html). The preinstalled packages include some popular Python libraries such as `numpy`, `pandas` and `sklearn`. In order to use these packages, you simply have to import them after an optional `%pip install`:
```python
### OPTIONAL ###
%pip install numpy pandas scikit-learn
################

import numpy as np
import pandas as pd
import sklearn
```

Note that the aforementioned [list](https://pyodide.org/en/latest/usage/packages-in-pyodide.html) of preinstalled packages relates to the latest version of JupyterLite that ***can*** be deployed. However, the JupyterLite version that is ***actually*** deployed by Skills Network is not necessarily the latest version, so the actual list of preinstalled libraries as well as the preinstalled libraries' versions may differ somewhat from that [list](https://pyodide.org/en/latest/usage/packages-in-pyodide.html).

#### Libraries from PyPI
Pure python packages with wheels on [PyPI](https://pypi.org/) can be installed. Pure python packages are those that have files on [PyPI](https://pypi.org/) with the pattern `*py3-none-any.whl`. An example of such a package is `seaborn`: if you go to https://pypi.org/project/seaborn/#files you will notice a file with a pattern matching `*py3-none-any.whl`. In order to install pure python packages remember to pin the version you wish to install, otherwise your lab may break when the package is updated on [PyPI](https://pypi.org/):
```python
%pip install seaborn==0.13.2
```

### Unsupported or Partially Supported Libraries

Packages that are not [preinstalled](#preinstalled-libraries) and not [pure python packages](#libraries-from-pypi) cannot be installed. Moreover, because access to the internet is restricted in the JupyterLite environment, packages that rely on an established internet connection may not work even if they can be installed; for these packages the workaround at [Downloading Data](#downloading-data) might work for you and you may not need to use the non-working package at all. 

The following popular python libraries are not supported or only partially supported in JupyterLite:


 - `pytorch`: this package is not [preinstalled](#preinstalled-libraries) and is not a [pure python package](#libraries-from-pypi)
 - `tensorflow`: this package is not [preinstalled](#preinstalled-libraries) and is not a [pure python package](#libraries-from-pypi)
 - `pyspark`: this package is not [preinstalled](#preinstalled-libraries) and is not a [pure python package](#libraries-from-pypi)
 - `requests`: this package is [preinstalled](#preinstalled-libraries) but under typical usage requires unrestricted access to the internet
 - `sqlite3`: works only with in-memory databases; for example `con = sqlite3.connect(":memory:")`

If your lab requires an unsupported package and a suitable alternative or workaround does not exist, you should use [JupyterLab](./jupyterlab) instead.

### Additional Caveats

Even if your lab uses libraries supported by JupyterLite, there are specific scenarios where you may want to consider using [JupyterLab](./jupyterlab):

 - Your lab has highly cpu-intensive code.
   - For example, `sklearn.manifold.TSNE.fit_transform` was found to be impractical in JupyterLite.
 - Large datasets (>100MB+) are being used.
   - Loading large datasets may be inconvenient for your learners on JupyterLite - they will load faster with JupyterLab.
 - You need a specific version of a Python package that differs from the one that is [preinstalled](#preinstalled-libraries) **AND** the [preinstalled](#preinstalled-libraries) package is not a [pure python package](#libraries-from-pypi).
   - JupyterLite does not allow you to upgrade or downgrade [preinstalled](#preinstalled-libraries) packages ***unless*** they are [pure python packages](#libraries-from-pypi). For instance, `%pip install numpy==1.26.3` will fail, but `%pip install tqdm==4.67.1` will succeed even if another version of `tqdm` is [preinstalled](#preinstalled-libraries).
 - You need to use two or more versions of a Python package in one notebook
   - JupyterLite does not allow you to upgrade or downgrade packages once they have been `%pip install`ed or `import`ed. For instance, `%pip install seaborn==0.13.1` followed by `%pip install seaborn==0.13.2` will fail at the second install.

## Convert from JupyterLab to JupyterLite

You can easily convert from JupyterLab to JupyterLite by following [Convert Labs from JupyterLab to JupyterLite (and Vice Versa) - Convert JupyterLab to JupyterLite](../convert-between-jupyterlab-and-jupyterlite#convert-jupyterlab-to-jupyterlite).

## Convert from JupyterLite to JupyterLab

You can easily convert from JupyterLite to JupyterLab by following [Convert Labs from JupyterLab to JupyterLite (and Vice Versa) - Convert JupyterLite to JupyterLab](../convert-between-jupyterlab-and-jupyterlite#convert-jupyterlite-to-jupyterlab).
