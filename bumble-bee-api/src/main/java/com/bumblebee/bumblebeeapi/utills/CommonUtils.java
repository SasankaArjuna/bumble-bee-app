package com.bumblebee.bumblebeeapi.utills;

import org.jetbrains.annotations.Nullable;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CommonUtils {
    public static Integer booleanToInteger (Boolean bool) {
        return bool ? 1 : 0;
    }

    public static Boolean integerToBool (Integer integer) {
        return integer == 1;
    }

    public static @Nullable Date stringToDate (String dateString) {
        try {
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            return dateFormat.parse(dateString);
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}
