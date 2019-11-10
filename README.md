# Acoustic Mobile Messaging with Ionic 
Use acoustic mobile messaging to build Ionic Mobile projects. The sample app demonstrates the integration of Acoustic cordova SDK with Ionic app. 
The sample registers with MCE and provides sample code to access SDK API via Ionic interface

# Usage
- Download Mobile-push cordova SDK https://github.com/ibm-mobile-push/cordova
- Note the SDK plugins folder as ./path-to-mce-cordova-sdk/plugins/com.xtify.mce.sdk  
- git clone https://github.com/giladm/ionic-mce
- cd ionic-mce
- npm install
- In config.xml file: replace id from 'com.replaceid' to the package used in android and to the bundleId used in iOS
- ionic cordova platform add ios
- ionic cordova platform add android
##### Add mce plugin to your app. Make sure you replace with your appKeys, server URL, etc. For  plugin settings check [MCE cordova SDK documentation](https://developer.ibm.com/customer-engagement/tutorials/creating-projects-with-apache-cordova-plugin/) 
- ionic cordova plugin add ./path-to-mce-cordova-sdk/plugins/com.xtify.mce.sdk  --variable ANDROID\_APPKEY=gcXXXX  --variable IOS\_DEV\_APPKEY=apXXXXXX  --variable IOS\_PROD\_APPKEY=apXXXXX  --variable SERVER_URL=https://sdkX.ibm.xtify.com --variable LOGLEVEL=verbose  --variable AUTO_INITIALIZE_LOCATION=false --variable AUTO_REINITIALIZE=true  --variable INVALIDATE_EXISTING_USER=true --variable CHANNEL_NAME="mce_cordova_channel" --variable CHANNEL_DESCRIPTION="mce_channel-Description" --variable CHANNEL_ID="mce_channel1" --force  

- ionic cordova plugin add ~/workspace/mce/sdk/cordova/ongoing-mce-cordova-sdk/plugins/com.xtify.mce.sdk.fcm
- copy google-service.json to your project root folder
- ionic cordova resources
- ionic cordova prepare
 
 Open project workspace in Xcode. Make sure bundle ID and team are set correctly. Enable Push Notification in Project > Targets > Capabilities.
- ionic cordova emulate ios  # test MCE registration on Simulator
- ionic cordova emulate android  # test MCE registration and notification on Emulator

# Expected results
App registers with IBM Watson Customer Engagement platform and receives userId and channel Id. When selecting MCE Registration Details from the menu, the registration information is displayed.

# Dependencies 
The sample program was tested using the following platfroms/versions
- npm         # 6.9.0
- ionic      	# 5.2.3
- cordova     # 9.0.0 (cordova-lib@9.0.1)
- cordova-res # 0.6.0 
- native-run	# 0.2.8
- ios-deploy	# 1.9.4
