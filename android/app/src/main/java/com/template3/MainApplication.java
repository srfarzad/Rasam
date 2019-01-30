package com.template3;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import com.airbnb.android.react.lottie.LottiePackage;

import io.invertase.firebase.RNFirebasePackage;

import com.airbnb.android.react.lottie.LottiePackage;

import io.invertase.firebase.RNFirebasePackage;

import com.airbnb.android.react.lottie.LottiePackage;
import com.airbnb.android.react.lottie.LottiePackage;
//import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.storage.RNFirebaseStoragePackage; // <-- Add this line

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;


public class MainApplication extends NavigationApplication {


    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                // eg. new VectorIconsPackage()
                new MainReactPackage(),
            new LottiePackage(),
                new RNFirebasePackage(),
                new RNFirebaseStoragePackage(), // <-- Add this line,
                new RNFirebaseAuthPackage() // <-- Add this line
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
}