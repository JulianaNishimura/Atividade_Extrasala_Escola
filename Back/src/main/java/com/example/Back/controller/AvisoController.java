package com.example.Back.controller;

import com.example.Back.entity.Aviso;
import com.example.Back.service.AvisoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/avisos")
public class AvisoController {
    @Autowired
    private AvisoService avisoService;

    @GetMapping
    public ResponseEntity<List<Aviso>> listarAvisos(){

    }

    @PostMapping
    public ResponseEntity<String> postarAvisos(@RequestBody Aviso aviso){

    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity<String> atualizarAvisos(@PathVariable Long id, @RequestBody Aviso){

    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarAvisos(@PathVariable Long id){

    }

}
