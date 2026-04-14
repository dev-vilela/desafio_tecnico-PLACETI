package com.placeti.avaliacao.service;

import com.placeti.avaliacao.model.Comercio;
import com.placeti.avaliacao.repository.ComercioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComercioService {

    private final ComercioRepository repository;

    public ComercioService(ComercioRepository repository) {
        this.repository = repository;
    }

    public Comercio salvar(Comercio comercio) {
        return repository.save(comercio);
    }

    public List<Comercio> listar() {
        return repository.findAll();
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}