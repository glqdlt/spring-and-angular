package com.glqdlt.seminar.demo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SampleService {
    private static final String GREETING = "NIce to Meet You ";

    public String greetingMessageBuilder(String message) {
        return GREETING + message;
    }


}
