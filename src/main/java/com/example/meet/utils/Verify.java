package com.example.meet.utils;

import java.util.Optional;

import jakarta.servlet.http.HttpSession;

public class Verify {

    public static Optional<String> validUser(HttpSession session) {
        return Optional.ofNullable((String) session.getAttribute("user"));
    }

    public static Optional<String> rootUser(HttpSession session) {
        return Optional.ofNullable((String) session.getAttribute("user"))
                .filter("root"::equals);
    }

}
