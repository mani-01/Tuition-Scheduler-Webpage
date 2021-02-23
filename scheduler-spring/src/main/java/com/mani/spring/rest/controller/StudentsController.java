package com.mani.spring.rest.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//this is where the name of the url to access the whole table goes
// example -> jdbc:serverURL:port/students
@RequestMapping("/students") 
public class StudentsController {
//need an autowired thing-- watch the video in recording....
}
