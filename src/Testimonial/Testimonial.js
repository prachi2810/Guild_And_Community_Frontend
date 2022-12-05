import { Grid } from "@mui/material";
import "../Testimonial/Testimonial.css";
export default function Testimonial() {
    return (<>
        <Grid container columns={12}>
            <Grid item xs={6}>
                <section class="t-bq-section" id="emma">
                    <div class="t-bq-wrapper t-bq-wrapper-boxed">
                        <div class="t-bq-quote t-bq-quote-emma">
                            <div class="t-bq-quote-emma-qmark"><span>&#10077;</span></div>
                            <div class="t-bq-quote-emma-userpic"></div>
                            <div class="t-bq-quote-emma-base">
                                <blockquote class="t-bq-quote-emma-text" cite="Priya Singh">
                                    Deeds are to be worshipped, not statues. And maybe even deeds do not need to be worshipped.
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>
            </Grid>
            <Grid item xs={6}>
                <section class="t-bq-section" id="pooja">
                    <div class="t-bq-wrapper t-bq-wrapper-boxed">
                        <div class="t-bq-quote t-bq-quote-pooja">
                            <div class="t-bq-quote-pooja-qmark"><span>&#10077;</span></div>
                            <div class="t-bq-quote-pooja-userpic"></div>
                            <div class="t-bq-quote-pooja-base">
                                <blockquote class="t-bq-quote-pooja-text" cite="Pooja Kothari">
                                    Deeds are to be worshipped, not statues. And maybe even deeds do not need to be worshipped.
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section >
            </Grid>
        </Grid>
    </>
    );
}