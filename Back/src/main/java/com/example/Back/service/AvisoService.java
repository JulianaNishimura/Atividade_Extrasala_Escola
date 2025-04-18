package com.example.Back.service;

import com.example.Back.controller.AvisoController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AvisoService {
    @Autowired
    private AvisoController avisoController;
}
