<template>
  <form>
    <div class="form-group row">
      <label for="name" class="col-4 col-form-label">Nome</label>
      <div class="col-8">
        <input
          id="name"
          name="name"
          placeholder="Informe o nome"
          type="text"
          class="form-control"
          required="required"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="birthDate" class="col-4 col-form-label"
        >Data de nascimneto</label
      >
      <div class="col-8">
        <input
          id="birthDate"
          name="birthDate"
          placeholder="Informe a data de nascimento"
          type="text"
          class="form-control"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="adress" class="col-4 col-form-label">Endereço</label>
      <div class="col-8">
        <input id="adress" name="adress" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="number" class="col-4 col-form-label">Número</label>
      <div class="col-8">
        <input id="number" name="number" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="postalCode" class="col-4 col-form-label">CEP</label>
      <div class="col-8">
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          class="form-control"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="city" class="col-4 col-form-label">Cidade</label>
      <div class="col-8">
        <input id="city" name="city" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="state" class="col-4 col-form-label">Estado</label>
      <div class="col-8">
        <input id="state" name="state" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="country" class="col-4 col-form-label">Pais</label>
      <div class="col-8">
        <input id="country" name="country" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="telephon" class="col-4 col-form-label">Telefone</label>
      <div class="col-8">
        <input id="telephon" name="telephon" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-4 col-form-label">Email</label>
      <div class="col-8">
        <input id="email" name="email" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="eye_color" class="col-4 col-form-label">Cor dos olhos</label>
      <div class="col-8">
        <input
          id="eye_color"
          name="eye_color"
          type="text"
          class="form-control"
        />
      </div>
    </div>

    <div class="form-group row">
      <label for="hair_color" class="col-4 col-form-label">hair_color</label>
      <div class="col-8">
        <input
          id="hair_color"
          name="hair_color"
          type="text"
          class="form-control"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="without_hair" class="col-4 col-form-label"
        >without_hair</label
      >
      <div class="col-8">
        <input
          id="without_hair"
          name="without_hair"
          type="text"
          class="form-control"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="height" class="col-4 col-form-label">height</label>
      <div class="col-8">
        <input id="height" name="height" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="tattoo" class="col-4 col-form-label">tattoo</label>
      <div class="col-8">
        <input id="tattoo" name="tattoo" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="disabled_person" class="col-4 col-form-label"
        >disabled_person</label
      >
      <div class="col-8">
        <input
          id="disabled_person"
          name="disabled_person"
          type="text"
          class="form-control"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="others" class="col-4 col-form-label">others</label>
      <div class="col-8">
        <input id="others" name="others" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="last_clothes" class="col-4 col-form-label"
        >last_clothes</label
      >
      <div class="col-8">
        <input
          id="last_clothes"
          name="last_clothes"
          type="text"
          class="form-control"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="last_place" class="col-4 col-form-label">last_place</label>
      <div class="col-8">
        <input
          id="last_place"
          name="last_place"
          type="text"
          class="form-control"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>