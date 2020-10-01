/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const toslateutil = require('./toslateutil');

const rules = {};

rules.ClauseDefinition = (thing,processChildren,parameters) => {
    const data = {};
    data.name = thing.name;
    if (thing.src) {
        data.src = thing.src;
    }
    if (thing.elementType) {
        data.elementType = thing.elementType;
    }
    if (thing.decorators) {
        data.decorators = thing.decorators.map(x => parameters.serializer.toJSON(x));
    }
    return {
        object: 'block',
        type: 'clause_definition',
        data: data,
        children: processChildren(thing,'nodes',parameters),
    };
};
rules.VariableDefinition = (thing,processChildren,parameters) => {
    const data = { name: thing.name };
    if (thing.elementType) {
        data.elementType = thing.elementType;
    }
    if (thing.decorators) {
        data.decorators = thing.decorators.map(x => parameters.serializer.toJSON(x));
    }
    if (thing.identifiedBy) {
        data.identifiedBy = thing.identifiedBy;
    }
    return toslateutil.handleVariable('variable_definition', data, thing.value, parameters);
};
rules.FormattedVariableDefinition = (thing,processChildren,parameters) => {
    const data = { name: thing.name, format: thing.format };
    if (thing.elementType) {
        data.elementType = thing.elementType;
    }
    if (thing.decorators) {
        data.decorators = thing.decorators.map(x => parameters.serializer.toJSON(x));
    }
    return toslateutil.handleVariable('variable_definition', data, thing.value, parameters);
};
rules.EnumVariableDefinition = (thing,processChildren,parameters) => {
    const data = { name: thing.name, enumValues: thing.enumValues };
    if (thing.elementType) {
        data.elementType = thing.elementType;
    }
    if (thing.decorators) {
        data.decorators = thing.decorators.map(x => parameters.serializer.toJSON(x));
    }
    return toslateutil.handleVariable('variable_definition', data, thing.value, parameters);
};
rules.ConditionalDefinition = (thing,processChildren,parameters) => {
    const localParameters = Object.assign({},parameters);
    parameters.strong = false;
    parameters.italic = false;
    const nodes = processChildren(thing,'nodes',parameters);
    const whenTrue = processChildren(thing,'whenTrue',parameters);
    const whenFalse = processChildren(thing,'whenFalse',parameters);
    const data = { name: thing.name, isTrue: thing.isTrue, whenTrue: whenTrue, whenFalse: whenFalse };
    if (thing.elementType) {
        data.elementType = thing.elementType;
    }
    if (thing.decorators) {
        data.decorators = thing.decorators.map(x => parameters.serializer.toJSON(x));
    }
    return toslateutil.handleBlockDefinition('conditional_definition', data, nodes, localParameters);
};
rules.OptionalDefinition = (thing,processChildren,parameters) => {
    const localParameters = Object.assign({},parameters);
    parameters.strong = false;
    parameters.italic = false;
    const nodes = processChildren(thing,'nodes',parameters);
    const whenSome = processChildren(thing,'whenSome',parameters);
    const whenNone = processChildren(thing,'whenNone',parameters);
    const data = { name: thing.name, hasSome: thing.hasSome, whenSome: whenSome, whenNone: whenNone };
    if (thing.elementType) {
        data.elementType = thing.elementType;
    }
    if (thing.decorators) {
        data.decorators = thing.decorators.map(x => parameters.serializer.toJSON(x));
    }
    return toslateutil.handleBlockDefinition('optional_definition', data, nodes, localParameters);
};
rules.FormulaDefinition = (thing,processChildren,parameters) => {
    const data = { name: thing.name };
    if (thing.elementType) {
        data.elementType = thing.elementType;
    }
    if (thing.dependencies) {
        data.dependencies = thing.dependencies;
    }
    if (thing.code) {
        data.code = thing.code;
    }
    return toslateutil.handleFormula(data, thing.value, parameters);
};

module.exports = rules;