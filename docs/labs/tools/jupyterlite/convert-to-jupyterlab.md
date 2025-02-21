# Convert to JupyterLab

Follow these steps to convert your JupyterLite lab to a JupyterLab lab:

1. **Open Your Lab:** Begin by clicking on your lab in Author Workbench to view its details page.

2. **Locate the Version Tab:** In the lab, find and click on the "Version" Tab. Refer to the image below for guidance:
![Version Tab](/img/labs/lab-version-tab2.png)

3. **Go to Settings:** Click on the "Settings" option within the Version Tab area.
![Setting](/img/labs/lab-settings2.png)

4. **Choose JupyterLab:** Find the section where you can select the tool. Choose "JupyterLab" as shown in the image:
![Choose JupyterLab](/img/labs/choose-jupyterlab.png)

5. **Choose JupyterLab type:** Find the section where you can select the JupyterLab type. JupyterLab Current is recommended unless you need the unique features offered by JupyterLab Classic:
![Choose JupyterLab type](/img/labs/choose-jupyterlab-type.png)

6. **Update Lab Version:** Click on "Update Lab Version" to convert to JupyterLab:
![Update Lab Version](/img/labs/choose-jupyterlab-confirm.png)

7. **Fix Library Installs In Your Lab:** JupyterLab and JupyterLite install libraries in different ways. After converting, you must fix library install issues that may be present in your lab in "Edit" mode. Moreover, be sure to not install or import the `skillsnetwork` library as it is unavailable in JupyterLab. For details, refer to [JupyterLite - Installing Packages](./tools/jupyterlite#installing-packages).

8. **Fix Data Downloading In Your Lab:** JupyterLab and JupyterLite download data in different ways. After converting, you must fix data download issues that may be present in your lab in "Edit" mode. Pay particular attention to cells that call the `skillsnetwork` library which is not available in JupyterLab. For details, refer to [JupyterLite - Downloading Data](./tools/jupyterlite#downloading-data).

9. **Ensure Your Code Cells Generate Correct Output:** Even after fixing library install and data downloading issues code that worked under JupyterLite may no longer work as intended under JupyterLab. Run all your code cells and ensure their outputs are correct.

10. **Re-embed Your Lab In Courses Or Projects If Necessary:** Converting your lab from JupyterLite to JupyterLab may have broken the embedding of your lab in courses or projects that use it. Ensure that the converted lab is correctly embedded in all the courses and projects that contained the original JupyterLite lab.
