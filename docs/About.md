# About

<div class="about-split" markdown>
<div class="about-split__text" markdown>

## What is RaveSpin XR?

The idea behind Rave-Spin XR, is through the use of an XR headset, such as the [Meta Quest 3S](https://www.meta.com/ie/quest/quest-3s/), give
experienced DJs *(Disk Jockeys)* the opportunity to make and mix music, without the need for the usual
physical equipment being present, thus allowing them to mix and play on-the-go.

With the included tooltips, beginner guides on [YouTube](https://youtu.be/AOChBT_xzik) and the Official RaveSpin XR website , and its
inherent ease-of-use, Rave-Spin XR allows beginners to try out DJing for themselves and learn the various
techniques and components without the required financial investment in the relevant hardware. 

With the growing interest in electronic music and people learning to DJ and mix, this will allow people to try out the
artform for themselves and gauge whether it’s a passion they would like to pursue. 

</div>
<div class="about-split__image">
  <img src="../assets/RaveSpinPoster.png" alt="RaveSpin Poster" />
</div>
</div>

## How does it work?

The application is loaded onto the users’ headset. All audio processing, hand-tracking, rendering, File-IO,
metadata extraction from songs, is all locally run on the users’ headset. There is explicitly no online
requirement.
Sessions may be recorded by the user, saving all output to the users’ headset, where it can be easily
shared, or easily extracted via USB to the user’s computer using the included tools.

## Install 

RaveSpin XR can be installed to your headset by deploying the app straight to your headset.

### Prerequistites
- [OpenJDK](https://adoptium.net/temurin/releases/?variant=openjdk17&version=17&os=any&arch=any) *(as mentioned by [Godot Docs](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_android.html))* 
- [Godot v4.6](https://godotengine.org/)
- **ADB** *(Usally packaged with [Android Studio](https://developer.android.com/studio) )*
- [Patience](https://www.psychologytoday.com/ie/blog/your-zesty-self/201109/four-steps-developing-patience), ***(Lots of it)***
- [Git](https://git-scm.com/install/)


### Installation 
Once you have Godot installed, we need to download RaveSpin XR
Then we want to open Godot and import our project.

1. Clone the RaveSpin XR Git Repo by running `git clone https://github.com/marc-rene/RaveSpin.git` in your terminal.

2. Open Godot and Click **"Import"** <br /> ![Open Godot. You will be greeted by the Recent-Project listing](assets/Godot%20Step%201.png)

3. Navigate to `../RaveSpin/Godot` and click on **`project.godot`** <br /> ![Click on Project.godot to open the RaveSpin Project](assets/Godot%20Step%202.png)

4. If it's your first time running Godot, you may need to **install the android build template**. If you have this installed you can skip this step. <br /> ![Click on Project.godot to open the RaveSpin Project](assets/Godot%20Step%203%20alt.png)

5. Make sure in your Godot **Editor Settings**, that you have the **Java SDK Path** and the **Android SDK Path** filled in. <br /> ![Click on Project.godot to open the RaveSpin Project](assets/Godot%20Step%203%20alt%202.png)

6. In Godot, click on the **Remote Deploy** button in the toolbar. Your Headset should appear shortly if it's connected. <br /> ![Click on Remote Deploy... Nothing yet](assets/Godot%20Step%203.png)

7. After waiting a few seconds, the Headset should appear. Click on the Headset, or press **`Shift + F5`** <br /> ![Click on Remote Deploy... Nothing yet](assets/Godot%20Step%204.png)



