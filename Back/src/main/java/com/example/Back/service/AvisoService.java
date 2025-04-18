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
        avisoRepository.save(aviso);
        return "Professor cadastrado";
    }

    public String atualizarAviso(Long id, Aviso aviso) {
        if(avisoRepository.existsById(id)){
            Aviso avisoExistente = avisoRepository.findById(id).get();
            avisoExistente.setAutor(aviso.getAutor());
            avisoExistente.setTitulo(aviso.getTitulo());
            avisoExistente.setDescricao(aviso.getDescricao());
            avisoExistente.setDataDePublicacao(aviso.getDataDePublicacao());
            avisoRepository.save(avisoExistente);
            return "Atualizado com sucesso";
        }
        return "Erro ao atualizar";
    }

    public String deletarAviso(Long id) {
        if(avisoRepository.existsById(id)){
            avisoRepository.deleteById(id);
            return "deletado com sucesso";
        }
        return "Erro ao deletar";
    }
}
