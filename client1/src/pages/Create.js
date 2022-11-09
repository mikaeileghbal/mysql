import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { addData, updateData } from "../api/dataSource";
import { useLanguages } from "../App";

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const { state } = useLanguages();

  const create = async (data) => {
    const result = await addData(data);
    console.log(result);
  };

  const update = async (data) => {
    const result = await updateData(state.language.id, data);
    console.log(result);
  };

  const onSubmit = (data) => {
    if (!state.edit) create(data);
    else update(data);

    navigate("/");
  };

  const handleCancel = (e) => {
    navigate("/");
  };

  useEffect(() => {
    if (state.edit) {
      const lang = state.language;
      setValue("name", lang.name);
      setValue("release_year", lang.release_year);
      setValue("githut_rank", lang.githut_rank);
      setValue("pypl_rank", lang.pypl_rank);
      setValue("tiobe_rank", lang.tiobe_rank);
    }
  }, [state.edit, state.language, setValue]);

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12 col-lg-6 mx-auto">
          {state.edit ? (
            <h3>Update current language</h3>
          ) : (
            <h3>Create new language</h3>
          )}
          <div className="row p-4 bg-light my-4 form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-3">
                <label htmlFor="name">Language name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="year">Release year</label>
                <input
                  type="text"
                  name="release_year"
                  id="year"
                  className="form-control"
                  {...register("release_year")}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="githut">Githut rank</label>
                <input
                  type="text"
                  name="githut_rank"
                  id="githut"
                  className="form-control"
                  {...register("githut_rank")}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="pypl">Pypl rank</label>
                <input
                  type="text"
                  name="pypl_rank"
                  id="pypl"
                  className="form-control"
                  {...register("pypl_rank")}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="tiobe">Tiobe rank</label>
                <input
                  type="text"
                  name="tiobe_rank"
                  id="tiobe"
                  className="form-control"
                  {...register("tiobe_rank")}
                />
              </div>
              <div className="form-group d-flex justify-content-end">
                <button className="btn btn-primary mx-2" type="submit">
                  Save
                </button>
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
