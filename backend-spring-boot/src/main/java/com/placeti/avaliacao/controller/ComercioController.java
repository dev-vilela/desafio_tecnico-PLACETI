package com.placeti.avaliacao.controller;


import com.placeti.avaliacao.model.Comercio;
import com.placeti.avaliacao.service.ComercioService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/comercios")
public class ComercioController {

    private final ComercioService service;

    public ComercioController(ComercioService service) {
        this.service = service;
    }

    @PostMapping
    public Comercio salvar(@RequestBody Comercio comercio) {
        return service.salvar(comercio);
    }

    @GetMapping
    public List<Comercio> listar() {
        return service.listar();
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}