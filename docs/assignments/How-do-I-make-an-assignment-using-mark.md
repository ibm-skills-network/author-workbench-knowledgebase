# Mark — Quick-Start Guide

Mark is an **AI-powered assessment platform** that lets authors build, publish, and grade assignments while giving learners instant feedback. It’s our preferred tool for creating and delivering assessments.

---

## 1 Creating an Assignment

1. **Create a course** (or open an existing one).
2. Go to **Assignments ▸ Create Assignment**.

   ![“Create assignment” button](image-20.png)

3. Enter an **assignment name** when prompted.
4. The authoring editor opens—add questions and click **Publish** when you’re ready.

---

## 2 Testing a Published Assignment

You have two testing options:

| Mode        | Where you find it          | Purpose                   |
| ----------- | -------------------------- | ------------------------- |
| **Preview** | Inside Mark’s authoring UI | Quick check while editing |
| **Test**    | Course player              | Full learner flow         |

### 2.1 Test Button

![Test button](image-21.png)

### 2.2 Preview Button

![Preview button in author view](image-22.png)

---

## 3 Adding Mark to Your Course Platform

Mark can be launched from three platforms:

1. **Skills Network**
2. **Coursera**
3. **edX (Open edX)**

All three start the same way.

### 3.1 Copy the LTI Launch URL

In **AWB ▸ Assignments**, click the **Embed** icon.

![Embed button](image-11.png)

Copy the **Launch URL** from the modal:

![Launch URL example](image-13.png)

---

### 3.2 Skills Network / Open edX

1. Open **Content** in your course and click **Edit in SN Studio**.  
   ![Content menu](image-6.png)

2. In Studio, create **New Subsection ▸ New Unit**.  
   ![New Subsection button](image-14.png)
   ![New Unit](image-15.png)

3. Click **Advanced** (flask icon) → **LTI Consumer**.  
   ![Advanced components](image-16.png)  
   ![Select LTI consumer](image-17.png)

4. Press **Edit** and fill in the fields:

   | Field                       | Value                             |
   | --------------------------- | --------------------------------- |
   | **LTI ID**                  | `sn_lti`                          |
   | **LTI URL**                 | _Launch URL_ (from step&nbsp;3.1) |
   | **Launch Target**           | `New Window`                      |
   | **Request user’s username** | `true`                            |
   | **Request user’s email**    | `true`                            |
   | **Send extra parameters**   | `true`                            |

5. **Save** ➜ **Preview** the unit. Use “View this course as…” to test both **Author** and **Learner** views.

---

### 3.3 Coursera

1. In **Content**, choose **Edit Content**, create a **Module**, then **Add Item ▸ App Item**.  
   ![Add App Item](image-8.png)

2. Launch the item and click **Switch to classic experience**.  
   ![Switch](image-9.png)  
   ![Classic experience form](image-18.png)

3. Complete the form:

   - **Learner Instructions** – brief description
   - **Launch URL** – from step 3.1
   - **Consumer Key** / **Shared Secret** – from the embed modal
   - _(Optional)_ **Callback** – enable to sync grades back to Coursera
   - **Privacy** – enable **Share learner ID, full name, and email address**

   ![Privacy settings](image-19.png)

4. Click **Publish**, then **View as Learner** to test.

---

### 3.4 edX.org (Open edX author view)

The workflow is identical to Skills Network, but the author interface looks slightly different:

![Open edX Studio layout](image-7.png)

Follow the same LTI setup steps as in section&nbsp;3.2.

---

## 4 Need Help?

If you have any problem with mark, please talk to the mark chat bot. Mark chatbot is smart and it will help you with problems. If it struggled with helping you, it will forward us a support ticket so do not worry!
