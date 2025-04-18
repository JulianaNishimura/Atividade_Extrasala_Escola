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
    public ResponseEntity<List<Aviso>> mostrarAvisos(){
        try{
            return ResponseEntity.ok(avisoService.listarAviso());
        } catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping
    public ResponseEntity<String> postarAvisos(@RequestBody Aviso aviso){
        try{
            String resultado = avisoService.salvarAviso(aviso);
            return ResponseEntity.ok(resultado);
        } catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity<String> atualizarAvisos(@PathVariable Long id, @RequestBody Aviso aviso){
        try{
            String resultado = avisoService.atualizarAviso(id, aviso);
            return ResponseEntity.ok(resultado);
        } catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarAvisos(@PathVariable Long id){
        try{
            String resultado = avisoService.deletarAviso(id);
            return ResponseEntity.ok(resultado);
        } catch (IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
