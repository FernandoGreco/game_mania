import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-contato",
  templateUrl: "./contato.component.html",
  styleUrls: ["./contato.component.scss"]
})
export class ContatoComponent implements OnInit {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ])
    ],
    shipping: ["free", Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {"name": "Acre", "abbreviation": "AC"},
    {"name": "Alagoas", "abbreviation": "AL"},
    {"name": "Amapá", "abbreviation": "AP"},
    {"name": "Amazonas", "abbreviation": "AM"},
    {"name": "Bahia", "abbreviation": "BA"},
    {"name": "Ceará", "abbreviation": "CE"},
    {"name": "Distrito Federal", "abbreviation": "DF"},
    {"name": "Espírito Santo", "abbreviation": "ES"},
    {"name": "Goiás", "abbreviation": "GO"},
    {"name": "Maranhão", "abbreviation": "MA"},
    {"name": "Mato Grosso", "abbreviation": "MT"},
    {"name": "Mato Grosso do Sul", "abbreviation": "MS"},
    {"name": "Minas Gerais", "abbreviation": "MG"},
    {"name": "Pará", "abbreviation": "PA"},
    {"name": "Paraíba", "abbreviation": "PB"},
    {"name": "Paraná", "abbreviation": "PR"},
    {"name": "Pernambuco", "abbreviation": "PE"},
    {"name": "Piauí", "abbreviation": "PI"},
    {"name": "Rio de Janeiro", "abbreviation": "RJ"},
    {"name": "Rio Grande do Norte", "abbreviation": "RN"},
    {"name": "Rio Grande do Sul", "abbreviation": "RS"},
    {"name": "Rondônia", "abbreviation": "RO"},
    {"name": "Roraima", "abbreviation": "RR"},
    {"name": "Santa Catarina", "abbreviation": "SC"},
    {"name": "São Paulo", "abbreviation": "SP"},
    {"name": "Sergipe", "abbreviation": "SE"},
    {"name": "Tocantins", "abbreviation": "TO"}
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    alert("Thanks!");
  }
}