watchman watch-del-all && rm -rf node_modules && rm -rf lib && rm -rf ios/build && yarn && yarn start -- --reset-cache && cd node_modules/react-native/third-party/glog-0.3.4 && sh ../../scripts/ios-configure-glog.sh && cd ../../../..
