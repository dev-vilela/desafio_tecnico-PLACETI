package com.placeti.avaliacao.controller;

import com.placeti.avaliacao.dto.CidadeDTO;
import com.placeti.avaliacao.service.ProjetoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/cidades")
public class CidadeController {

    @Autowired
    private ProjetoService service;


    @GetMapping("/{id}")
    public ResponseEntity<CidadeDTO> buscarPeloId(@PathVariable Long id) {
        return ResponseEntity.ok(service.pesquisarCidade(id));
    }

    @GetMapping
    public List<CidadeDTO> pesquisarCidades() {
        return service.pesquisarCidades();
    }

    @PostMapping
    public ResponseEntity<Void> incluirCidade(@RequestBody CidadeDTO cidadeDto) {
        service.incluirCidade(cidadeDto);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity<Void> alterarCidade(@RequestBody CidadeDTO cidadeDto) {
        service.alterarCidade(cidadeDto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{idCidade}")
    public ResponseEntity<Void> excluirCidade(@PathVariable Long idCidade) {
        service.excluirCidade(idCidade);
        return ResponseEntity.noContent().build();
    }
}