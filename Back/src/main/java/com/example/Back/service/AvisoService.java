package com.example.Back.service;

import com.example.Back.entity.Aviso;
import com.example.Back.repository.AvisoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvisoService {

    @Autowired
    private AvisoRepository avisoRepository;

    public List<Aviso> listarAviso() {
        return avisoRepository.findAll();
    }

    public String salvarAviso(Aviso aviso) {
    }

    public String atualizarAviso(Long id, Aviso aviso) {
    }

    public String deletarAviso(Long id) {
    }
}
