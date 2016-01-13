<?php

/**
 * @file
 * Administrative pages form kladr_field module.
 */

/**
 * Menu callback; settings form.
 */
function kladr_field_settings_form($form, &$form_state) {
  $form['kladr_field_token'] = array(
    '#type' => 'textfield',
    '#title' => t('Token'),
    '#default_value' => variable_get('kladr_field_token'),
  );
  $form['kladr_field_key'] = array(
    '#type' => 'textfield',
    '#title' => t('Key'),
    '#default_value' => variable_get('kladr_field_key'),
  );
  return system_settings_form($form);
}
